import * as React from "react"

import Link from "next/link"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ProfessionsSignup } from "@/data/professions-signup"

export function CardWithForm() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center h-full w-full rtl">
        <div className="flex flex-col items-center sm:items-start justify-center w-full sm:w-1/2">
          <Image
            src="/svg/undraw_edit-photo_tuxn.svg"
            alt="engineers"
            width={600}
            height={600}
            priority
            className="w-full max-w-xl pl-20 hidden sm:block"
          />
        </div>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>تسجيل صنايعى</CardTitle>
            <CardDescription>تسجيل صنايعى فى صفحة صنايعية منشأة البكاري </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">الأسم</Label>
                  <Input id="name" placeholder="مثال: إبراهيم محمود" />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" type="tel" placeholder="أدخل رقم هاتفك" style={{ textAlign: 'right' }} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="profilePicture">صورة شخصية</Label>
                  <Input id="profilePicture" type="file" accept="image/*" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">المهنة</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="اختر المهنة" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {ProfessionsSignup.map((ProfessionsSignup) => (
                        <SelectItem key={ProfessionsSignup.value} value={ProfessionsSignup.value}>
                          {ProfessionsSignup.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <Link href="/">رجوع</Link>
            </Button>
            <Button>تسجيل</Button>
          </CardFooter>
        </Card>
      </div>
    </section>

  )
}
