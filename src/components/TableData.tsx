import {
    Table,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { JSX } from 'react';


export function TableData({headers, children}:{headers:string[], children: JSX.Element}) {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow >
                        {
                            headers.map(header => (
                                <TableHead key={header} className="text-xs md:text-sm cursor-default font-medium text-primaryDarkBlue capitalize">{header}</TableHead>
                            ))
                        }
                    </TableRow>
                </TableHeader>
                {children}
            </Table>
        </div>
    )
}