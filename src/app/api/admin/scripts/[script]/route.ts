import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';

const execAsync = promisify(exec);

const allowedScripts = ['add-blogs', 'conf-wiz', 'create-admin', 'deploy-vercel'];

export async function POST(
    request: NextRequest,
    { params }: { params: { script: string } }
) {
    const { script } = params;

    if (!allowedScripts.includes(script)) {
        return NextResponse.json(
            { success: false, message: 'Script not allowed' },
            { status: 400 }
        );
    }

    const scriptPath = path.join(process.cwd(), 'scripts', `${script}.ts`);
    const scriptPathJs = path.join(process.cwd(), 'scripts', `${script}.js`);

    let finalScriptPath: string;
    let command: string;

    if (fs.existsSync(scriptPath)) {
        // TypeScript script
        command = `npx tsx ${scriptPath}`;
        finalScriptPath = scriptPath;
    } else if (fs.existsSync(scriptPathJs)) {
        // JavaScript script
        command = `node ${scriptPathJs}`;
        finalScriptPath = scriptPathJs;
    } else {
        return NextResponse.json(
            { success: false, message: 'Script file not found' },
            { status: 404 }
        );
    }

    // Add flags for non-interactive execution
    if (script === 'conf-wiz') {
        command += ' --dry-run';
    } else if (script === 'deploy-vercel') {
        command += ' --force';
    }

    try {
        const { stdout, stderr } = await execAsync(command, {
            cwd: process.cwd(),
            timeout: 300000, // 5 minutes timeout
        });

        const output = stdout + (stderr ? `\nSTDERR:\n${stderr}` : '');

        return NextResponse.json({
            success: true,
            message: 'Script executed successfully',
            output: output.trim(),
        });
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: 'Script execution failed',
            output: error.stdout || '',
            error: error.stderr || error.message,
        }, { status: 500 });
    }
}