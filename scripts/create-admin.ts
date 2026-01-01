import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import "dotenv/config";

const prisma = new PrismaClient();

async function main() {
    const email = "admin@meddoc.com";
    const password = "adminpassword123";
    const hashedPassword = await bcrypt.hash(password, 12);

    console.log("Creating admin user...");

    try {
        const admin = await prisma.user.upsert({
            where: { email },
            update: {
                password: hashedPassword,
                role: Role.ADMIN,
            },
            create: {
                email,
                name: "Admin User",
                password: hashedPassword,
                role: Role.ADMIN,
            },
        });

        console.log("-----------------------------------------");
        console.log("Admin user created/updated successfully!");
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log("-----------------------------------------");
    } catch (err) {
        console.error("Error creating admin user:", err);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
