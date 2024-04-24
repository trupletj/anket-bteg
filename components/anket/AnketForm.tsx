"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

import { Trash2, ListPlus, Send } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const formSchema = z.object({
  lastname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  register_number: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  sex: z.enum(["male", "female"], {
    required_error: "You need to select a notification type.",
  }),
  phone: z.string().min(8, {
    message: "utas must be at least 8 characters.",
  }),
  // Orshin suugaa hayag
  address_home: z.object({
    city: z.string(),
    district: z.string(),
    address: z.string(),
  }),
  // Unemlehnii Hayag
  address_permanent: z.object({
    city: z.string(),
    district: z.string(),
    address: z.string(),
  }),
  familyInfo: z.array(
    z.object({
      fullName: z.string(),
      jobAddress: z.string(),
      relation: z.string(),
    })
  ),
  educationInfo: z.array(
    z.object({
      schoolName: z.string(),
      start_date: z.string(),
      end_date: z.string(),
      profession: z.string(),
      edu_degree: z.string(),
      gpa: z.string(),
    })
  ),
  coursesInfo: z.array(
    z.object({
      courseName: z.string(),
      start_date: z.string(),
      end_date: z.string(),
      profession: z.string(),
    })
  ),
  jobHistory: z.array(
    z.object({
      companyName: z.string(),
      jobPosition: z.string(),
      start_date: z.string(),
      end_date: z.string(),
      dismissalReason: z.string(),
    })
  ),
  computerKnowledge: z.array(
    z.object({
      appName: z.string(),
      level: z.string(),
    })
  ),
  skillsInfo: z.array(
    z.object({
      skillName: z.string(),
      award: z.string(),
      competition: z.string(),
    })
  ),
  awardsInfo: z.array(
    z.object({
      awardOrg: z.string(),
      award: z.string(),
      awardDate: z.string(),
    })
  ),
});

const cnFormItem = "col-span-2 sm:col-span-1";
const cnFormLabel = "";
const cnFormControl = "";
const cnInput = "";

function AnketForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastname: "",
      firstname: "",
      educationInfo: [
        {
          schoolName: "",
          start_date: "",
          end_date: "",
          profession: "",
          edu_degree: "",
          gpa: "",
        },
      ],
      familyInfo: [
        {
          fullName: "",
          jobAddress: "",
          relation: "",
        },
      ],
      coursesInfo: [
        {
          courseName: "",
          start_date: "",
          end_date: "",
          profession: "",
        },
      ],

      jobHistory: [
        {
          companyName: "",
          jobPosition: "",
          start_date: "",
          end_date: "",
          dismissalReason: "",
        },
      ],
      computerKnowledge: [
        {
          appName: "",
          level: "",
        },
      ],

      skillsInfo: [
        {
          skillName: "",
          award: "",
          competition: "",
        },
      ],
      awardsInfo: [
        {
          awardOrg: "",
          award: "",
          awardDate: "",
        },
      ],
    },
  });

  const {
    fields: familyInfoFields,
    append: familyInfoAppend,
    remove: familyInfoRemove,
  } = useFieldArray({ control: form.control, name: "familyInfo" });

  const {
    fields: educationInfoFields,
    append: educationInfoAppend,
    remove: educationInfoRemove,
  } = useFieldArray({ control: form.control, name: "educationInfo" });
  const {
    fields: coursesInfoFields,
    append: coursesInfoAppend,
    remove: coursesInfoRemove,
  } = useFieldArray({ control: form.control, name: "coursesInfo" });
  const {
    fields: jobHistoryFields,
    append: jobHistoryAppend,
    remove: jobHistoryRemove,
  } = useFieldArray({ control: form.control, name: "jobHistory" });
  const {
    fields: computerKnowledgeFields,
    append: computerKnowledgeAppend,
    remove: computerKnowledgeRemove,
  } = useFieldArray({ control: form.control, name: "computerKnowledge" });
  const {
    fields: skillsInfoFields,
    append: skillsInfoAppend,
    remove: skillsInfoRemove,
  } = useFieldArray({ control: form.control, name: "skillsInfo" });
  const {
    fields: awardsInfoFields,
    append: awardsInfoAppend,
    remove: awardsInfoRemove,
  } = useFieldArray({ control: form.control, name: "awardsInfo" });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <Card>
          <CardHeader>
            <CardTitle>ЕРӨНХИЙ МЭДЭЭЛЭЛ</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row ">
            <div className="w-full sm:w-1/4 flex flex-col items-center">
              <Avatar className="w-36 h-40 rounded-xl ">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback className="rounded-xl">
                  <p className="text-xs text-center p-3 italic">
                    Сүүлийн 3 сард авхуулсан цээж зураг
                  </p>
                </AvatarFallback>
              </Avatar>
              <p>Zurag oruulah</p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full sm:w-3/4">
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className={cnFormItem}>
                    <FormLabel className={cnFormLabel}> Овог*</FormLabel>
                    <FormControl className={cnFormControl}>
                      <Input
                        className={cnInput}
                        placeholder="Овог"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormMessage />  */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className={cnFormItem}>
                    <FormLabel className={cnFormLabel}>Нэр*</FormLabel>
                    <FormControl className={cnFormControl}>
                      <Input className={cnInput} placeholder="Нэр" {...field} />
                    </FormControl>
                    {/* <FormMessage />  */}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="register_number"
                render={({ field }) => (
                  <FormItem className={cnFormItem}>
                    <FormLabel className={cnFormLabel}>РД*</FormLabel>
                    <FormControl className={cnFormControl}>
                      <Input
                        className={cnInput}
                        placeholder="Регистрийн дугаар*"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sex"
                render={({ field }) => (
                  <FormItem className={cnFormItem}>
                    <FormLabel className={cnFormLabel}>Хүйс*</FormLabel>
                    <FormControl className={cnFormControl}>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal">Эрэгтэй</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="font-normal">Эмэгтэй</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className={cnFormItem}>
                    <FormLabel className={cnFormLabel}>
                      Утасны дугаар*
                    </FormLabel>
                    <FormControl className={cnFormControl}>
                      <Input
                        className={cnInput}
                        placeholder="Утасны дугаар"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormMessage />  */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cnFormLabel}>Имэйл хаяг*</FormLabel>
                    <FormControl className={cnFormControl}>
                      <Input
                        className={cnInput}
                        placeholder="Имэйл хаяг"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <div className="col-span-2 sm:col-span-1 flex flex-col space-y-2">
                <FormLabel className={cnFormLabel}>
                   Иргэний үнэмлэхний хаяг*
                </FormLabel>
                <div className="flex space-x-4">
                  <FormField
                    control={form.control}
                    name="address_permanent.city"
                    render={({ field }) => (
                      <FormItem className="">
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Хот/Аймаг" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Ulaanbaatar">
                              Ulaanbaatar
                            </SelectItem>
                            <SelectItem value="Darhan">Darhan</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address_permanent.district"
                    render={({ field }) => (
                      <FormItem className="">
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Дүүрэг/Сум" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Suhbaatar">
                              Sukhbaatar
                            </SelectItem>
                            <SelectItem value="Chingeltei">
                              Chingeltei
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address_permanent.address"
                    render={({ field }) => (
                      <FormItem className={cnFormItem}>
                        <FormControl className={cnFormControl}>
                          <Input
                            className={cnInput}
                            placeholder="Hayag"
                            {...field}
                          />
                        </FormControl>
                        {/* <FormMessage />  */}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col space-y-2">
                <FormLabel className={cnFormLabel}>
                   Оршин суугаа хаяг*
                </FormLabel>
                <div className="flex space-x-4">
                  <FormField
                    control={form.control}
                    name="address_home.city"
                    render={({ field }) => (
                      <FormItem className="">
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Хот/Аймаг" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Ulaanbaatar">
                              Ulaanbaatar
                            </SelectItem>
                            <SelectItem value="Darhan">Darhan</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address_home.district"
                    render={({ field }) => (
                      <FormItem className="">
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Дүүрэг/Сум" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Suhbaatar">
                              Sukhbaatar
                            </SelectItem>
                            <SelectItem value="Chingeltei">
                              Chingeltei
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address_home.address"
                    render={({ field }) => (
                      <FormItem className={cnFormItem}>
                        <FormControl className={cnFormControl}>
                          <Input
                            className={cnInput}
                            placeholder="Hayag"
                            {...field}
                          />
                        </FormControl>
                        {/* <FormMessage />  */}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ГЭР БҮЛИЙН БАЙДАЛ</CardTitle>
            <CardDescription>
              Зөвхөн гэр бүлд байгаа гишүүдийг бичнэ
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* shine section ger bul */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Таны юу болох</TableHead>
                  <TableHead>Овог нэр</TableHead>
                  <TableHead>
                    Одоо ажиллаж буй байгууллага, албан тушаал
                  </TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {familyInfoFields.map((item, index) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <FormField
                          control={form.control}
                          name={`familyInfo.${index}.relation`}
                          render={({ field }) => (
                            <FormItem className="">
                              <Select onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Хамаарал" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Аав">Аав</SelectItem>
                                  <SelectItem value="Ээж">Ээж</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`familyInfo.${index}.fullName`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`familyInfo.${index}.jobAddress`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <button
                          type="button"
                          onClick={() => familyInfoRemove(index)}
                        >
                          <Trash2 color="red" size={18} />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <Button
                  type="button"
                  onClick={() => {
                    familyInfoAppend({
                      fullName: "",
                      jobAddress: "",
                      relation: "",
                    });
                  }}
                >
                  <ListPlus color="green" size={18} />{" "}
                  <p className="pl-1">Мөр нэмэх</p>
                </Button>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {/* БОЛОВСРОЛЫН ТАЛААРХ МЭДЭЭЛЭЛ */}
        <Card>
          <CardHeader>
            <CardTitle>БОЛОВСРОЛЫН ТАЛААРХ МЭДЭЭЛЭЛ</CardTitle>
            <CardDescription>
              Ерөнхий боловсролын сургуулийг оролцуулан бичнэ
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* shine section ger bul
            schoolName: z.string(),
            start_date: z.string(),
            end_date: z.string(),
            profession: z.string(),
            edu_degree: z.string(), 
            gpa: z.string(),
            */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Хаана, ямар сургууль</TableHead>
                  <TableHead>Элссэн огноо</TableHead>
                  <TableHead>Төгссөн огноо</TableHead>
                  <TableHead>Эзэмшсэн мэргэжил</TableHead>
                  <TableHead>Зэрэг, цол</TableHead>
                  <TableHead>Дүнгийн голч</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {educationInfoFields.map((item, index) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <FormField
                          control={form.control}
                          name={`educationInfo.${index}.schoolName`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`educationInfo.${index}.start_date`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`educationInfo.${index}.end_date`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`educationInfo.${index}.profession`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`educationInfo.${index}.edu_degree`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`educationInfo.${index}.gpa`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <button
                          type="button"
                          onClick={() => educationInfoRemove(index)}
                        >
                          <Trash2 color="red" size={18} />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <Button
                  type="button"
                  onClick={() => {
                    educationInfoAppend({
                      schoolName: "",
                      start_date: "",
                      end_date: "",
                      profession: "",
                      edu_degree: "",
                      gpa: "",
                    });
                  }}
                >
                  <ListPlus color="green" size={18} />{" "}
                  <p className="pl-1">Мөр нэмэх</p>
                </Button>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {/*  ГАДААД, ДОТООДЫН МЭРГЭЖИЛ ДЭЭШЛҮҮЛЭХ БОЛОН БУСАД ЧИГЛЭЛЭЭР 
ХАМРАГДАЖ БАЙСАН СУРГАЛТ, СЕМИНАР */}
        <Card>
          <CardHeader>
            <CardTitle>
              ГАДААД, ДОТООДЫН МЭРГЭЖИЛ ДЭЭШЛҮҮЛЭХ БОЛОН БУСАД ЧИГЛЭЛЭЭР
              ХАМРАГДАЖ БАЙСАН СУРГАЛТ, СЕМИНАР
            </CardTitle>
            {/* <CardDescription>
              Ерөнхий боловсролын сургуулийг оролцуулан бичнэ
            </CardDescription> */}
          </CardHeader>
          {/* courseName: z.string(),
              start_date: z.string(),
              end_date: z.string(),
              profession: z.string(), */}
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">
                    Байгууллага / Сургуулийн нэр
                  </TableHead>
                  <TableHead>Элссэн огноо</TableHead>
                  <TableHead>Төгссөн огноо</TableHead>
                  <TableHead>Сэдэв, чиглэл / Эзэмшсэн мэргэжил</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coursesInfoFields.map((item, index) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <FormField
                          control={form.control}
                          name={`coursesInfo.${index}.courseName`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`coursesInfo.${index}.start_date`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`coursesInfo.${index}.end_date`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`coursesInfo.${index}.profession`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>

                      <TableCell className="text-right">
                        <button
                          type="button"
                          onClick={() => coursesInfoRemove(index)}
                        >
                          <Trash2 color="red" size={18} />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <Button
                  type="button"
                  onClick={() => {
                    coursesInfoAppend({
                      courseName: "",
                      start_date: "",
                      end_date: "",
                      profession: "",
                    });
                  }}
                >
                  <ListPlus color="green" size={18} />{" "}
                  <p className="pl-1">Мөр нэмэх</p>
                </Button>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {/* ХӨДӨЛМӨРИЙН ТҮҮХ */}
        <Card>
          <CardHeader>
            <CardTitle>ХӨДӨЛМӨРИЙН ТҮҮХ</CardTitle>
            <CardDescription>
              Сүүлийн ажлаасаа эхлэн бичнэ үү (албан газрыг тэр үеийн нэрээр).
              Хувиараа хөдөлмөр эрхэлж байсан бол тодорхой бичнэ үү
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* shine section ger bul
            jobHistory: z.array(
            z.object({
              companyName: z.string(),
              jobPosition: z.string(),
              start_date: z.string(),
              end_date: z.string(),
              dismissalReason: z.string(),
            })
          ),
            */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Байгууллагын нэр</TableHead>
                  <TableHead>Ажиллаж байсан албан тушаал</TableHead>
                  <TableHead>Орсон огноо</TableHead>
                  <TableHead>Гарсан огноо</TableHead>
                  <TableHead>Ажлаас гарсан шалтгаан</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobHistoryFields.map((item, index) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <FormField
                          control={form.control}
                          name={`jobHistory.${index}.companyName`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        <FormField
                          control={form.control}
                          name={`jobHistory.${index}.jobPosition`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`jobHistory.${index}.start_date`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`jobHistory.${index}.end_date`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`jobHistory.${index}.dismissalReason`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>

                      <TableCell className="text-right">
                        <button
                          type="button"
                          onClick={() => jobHistoryRemove(index)}
                        >
                          <Trash2 color="red" size={18} />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <Button
                  type="button"
                  onClick={() => {
                    jobHistoryAppend({
                      companyName: "",
                      start_date: "",
                      end_date: "",
                      jobPosition: "",
                      dismissalReason: "",
                    });
                  }}
                >
                  <ListPlus color="green" size={18} />{" "}
                  <p className="pl-1">Мөр нэмэх</p>
                </Button>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {/* КОМПЬЮТЕРИЙН МЭДЛЭГ */}
        <Card>
          <CardHeader>
            <CardTitle>КОМПЬЮТЕРИЙН МЭДЛЭГ</CardTitle>
            <CardDescription>
              Өөрийн эзэмшсэн програмын мэдлэгийг оруулна уу
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Програмын нэр</TableHead>
                  <TableHead className="">Түвшин</TableHead>

                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {computerKnowledgeFields.map((item, index) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <FormField
                          control={form.control}
                          name={`computerKnowledge.${index}.appName`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>

                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`computerKnowledge.${index}.level`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>

                      <TableCell className="text-right">
                        <button
                          type="button"
                          onClick={() => computerKnowledgeRemove(index)}
                        >
                          <Trash2 color="red" size={18} />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <Button
                  type="button"
                  onClick={() => {
                    computerKnowledgeAppend({
                      appName: "",
                      level: "",
                    });
                  }}
                >
                  <ListPlus color="green" size={18} />{" "}
                  <p className="pl-1">Мөр нэмэх</p>
                </Button>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {/* ТАНЫ СОНИРХДОГ УРЛАГ, СПОРТЫН АВЪЯАС, ХОББИ */}

        <Card>
          <CardHeader>
            <CardTitle>ТАНЫ СОНИРХДОГ УРЛАГ, СПОРТЫН АВЪЯАС, ХОББИ</CardTitle>
            {/* <CardDescription>
              Ерөнхий боловсролын сургуулийг оролцуулан бичнэ
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Төрлүүд</TableHead>

                  <TableHead>Оролцсон тэмцээн</TableHead>
                  <TableHead>Зэрэг, шагналын нэр</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skillsInfoFields.map((item, index) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <FormField
                          control={form.control}
                          name={`skillsInfo.${index}.skillName`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`skillsInfo.${index}.competition`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`skillsInfo.${index}.award`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>

                      <TableCell className="text-right">
                        <button
                          type="button"
                          onClick={() => skillsInfoRemove(index)}
                        >
                          <Trash2 color="red" size={18} />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <Button
                  type="button"
                  onClick={() => {
                    skillsInfoAppend({
                      skillName: "",
                      competition: "",
                      award: "",
                    });
                  }}
                >
                  <ListPlus color="green" size={18} />{" "}
                  <p className="pl-1">Мөр нэмэх</p>
                </Button>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {/* Таны гавъяа шагналын мэдээлэл */}
        <Card>
          <CardHeader>
            <CardTitle>ТАНЫ ГАВЪЯА ШАГНАЛЫН МЭДЭЭЛЭЛ</CardTitle>
            {/* <CardDescription>
              Ерөнхий боловсролын сургуулийг оролцуулан бичнэ
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            {/* shine section ger bul
            schoolName: z.string(),
            start_date: z.string(),
            end_date: z.string(),
            profession: z.string(),
            edu_degree: z.string(), 
            gpa: z.string(),
            */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Шагнасан байгууллага</TableHead>
                  <TableHead>Шагналын нэр</TableHead>
                  <TableHead>Шагнагдсан огноо</TableHead>

                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {awardsInfoFields.map((item, index) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <FormField
                          control={form.control}
                          name={`awardsInfo.${index}.awardOrg`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`awardsInfo.${index}.award`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`awardsInfo.${index}.awardDate`}
                          render={({ field }) => (
                            <FormItem className={cnFormItem}>
                              <FormControl className={cnFormControl}>
                                <Input
                                  className={cnInput}
                                  placeholder="Hayag"
                                  {...field}
                                />
                              </FormControl>
                              {/* <FormMessage />  */}
                            </FormItem>
                          )}
                        />
                      </TableCell>

                      <TableCell className="text-right">
                        <button
                          type="button"
                          onClick={() => awardsInfoRemove(index)}
                        >
                          <Trash2 color="red" size={18} />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <Button
                  type="button"
                  onClick={() => {
                    awardsInfoAppend({
                      awardOrg: "",
                      award: "",
                      awardDate: "",
                    });
                  }}
                >
                  <ListPlus color="green" size={18} />
                  <p className="pl-1">Мөр нэмэх</p>
                </Button>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Button type="submit">
          <Send color="green" size={18} /> <p className="ml-2">АНКЕТ ИЛГЭЭХ</p>
        </Button>
      </form>
    </Form>
  );
}

export default AnketForm;
