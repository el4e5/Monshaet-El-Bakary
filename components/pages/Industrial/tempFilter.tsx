"use client";
import React, { useState } from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
} from "@/components/ui/pagination"

// مثال على بيانات الصنايعية
const workers = [
    { id: 1, name: 'أحمد محمد على', profession: 'كهرباء', image: '/undraw_car-repair_wski.svg', phone: '0123456789' },
    { id: 2, name: 'محمد', profession: 'كهرباء', image: '/undraw_car-repair_wski.svg', phone: '0123456780' },
    { id: 3, name: 'علي', profession: 'كهرباء', image: '/undraw_car-repair_wski.svg', phone: '0123456781' },
    { id: 4, name: 'علي', profession: 'كهرباء', image: '/undraw_car-repair_wski.svg', phone: '0123456782' },
    { id: 5, name: 'علي', profession: 'كهرباء', image: '/undraw_car-repair_wski.svg', phone: '0123456783' },
    { id: 6, name: 'محمود', profession: 'كهرباء', image: '/undraw_car-repair_wski.svg', phone: '0123456784' },
];

export function Filter() {
    const [profession, setProfession] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = window.innerWidth > 768 ? 3 : 2;

    const filteredWorkers = workers.filter(worker => worker.profession === profession);

    const indexOfLastWorker = currentPage * itemsPerPage;
    const indexOfFirstWorker = indexOfLastWorker - itemsPerPage;
    const currentWorkers = filteredWorkers.slice(indexOfFirstWorker, indexOfLastWorker);

    return (
        <div>
            <div className="mb-10">
                <Select onValueChange={setProfession}>
                    <SelectTrigger id="profession">
                        <SelectValue placeholder="اختر مهنة الصنايعى" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        <SelectItem value="كهرباء">كهرباء</SelectItem>
                        <SelectItem value="سباكة">سباكة</SelectItem>
                        <SelectItem value="نجارة">نجارة</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                {currentWorkers.map(worker => (
                    <li key={worker.id} className="flex justify-center">
                        <a href={`tel:${worker.phone}`} style={{ textDecoration: 'none' }}>
                            <Card className="w-full max-w-xs md:max-w-sm" style={{ margin: 'auto', maxWidth: '200px' }}>
                                <CardHeader>
                                    <img src={worker.image} alt={worker.name} style={{ width: '100%', height: 'auto' }} />
                                </CardHeader>
                                <CardContent>
                                    <CardTitle style={{ fontSize: '15px' }}>{worker.name}</CardTitle>
                                </CardContent>
                            </Card>
                        </a>
                    </li>
                ))}
            </ul>

            {profession && filteredWorkers.length > 0 ? (
                <Pagination className="mt-4" dir="rtl">
                    <PaginationContent>
                        <PaginationItem>
                            {currentPage > 1 && (
                                <PaginationPrevious onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
                            )}
                        </PaginationItem>
                        {Array.from({ length: Math.ceil(filteredWorkers.length / itemsPerPage) }, (_, index) => (
                            <PaginationItem key={index + 1}>
                                <PaginationLink
                                    href="#"
                                    isActive={currentPage === index + 1}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        {currentPage < Math.ceil(filteredWorkers.length / itemsPerPage) && (
                            <PaginationItem>
                                <PaginationNext 
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredWorkers.length / itemsPerPage)))}
                                />
                            </PaginationItem>
                        )}
                    </PaginationContent>
                </Pagination>
            ) : null}
        </div>
    );
}