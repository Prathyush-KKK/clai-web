import BreadCrumb from "@/components/breadcrumb";
import { ProductForm } from "@/components/forms/product-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "User", link: "/dashboard/users" },
    { title: "Create", link: "/dashboard/users/create" },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <BreadCrumb items={breadcrumbItems} />
        <ProductForm
          categories={[
            { _id: "root", name: "root" },
            { _id: "service", name: "service" },
            { _id: "regular", name: "regular" },

          ]}
          initialData={null}
          key={null}
        />
      </div>
    </ScrollArea>
  );
}
