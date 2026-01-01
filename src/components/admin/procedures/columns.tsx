"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Procedure } from "@prisma/client";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { deleteProcedure } from "@/actions/procedures";
import { toast } from "sonner";

export const columns: ColumnDef<Procedure>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "slug",
        header: "Slug",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            return (
                <div
                    className={`font-medium ${status === "PUBLISHED" ? "text-green-600" : "text-amber-600"
                        }`}
                >
                    {status}
                </div>
            );
        },
    },
    {
        accessorKey: "updatedAt",
        header: "Last Updated",
        cell: ({ row }) => {
            return new Date(row.getValue("updatedAt")).toLocaleDateString();
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const procedure = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(procedure.id)}
                        >
                            Copy ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href={`/admin/procedures/${procedure.id}`}>Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={async () => {
                                if (confirm("Are you sure you want to delete this procedure?")) {
                                    const res = await deleteProcedure(procedure.id);
                                    if (res.message.includes("Database Error")) {
                                        toast.error(res.message);
                                    } else {
                                        toast.success(res.message);
                                    }
                                }
                            }}
                            className="text-red-600 focus:text-red-600"
                        >
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
