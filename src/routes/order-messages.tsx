import { createFileRoute } from "@tanstack/react-router";
import { HubShell } from "@/components/hub/hub-shell";
import { StatusMessagesEditor } from "./orders";

export const Route = createFileRoute("/order-messages")({
  head: () => ({
    meta: [
      { title: "رسائل الطلبات · cupai" },
      { name: "description", content: "تحكم في الرسائل التلقائية التي تصل للعميل عند تحديث حالة الطلب." },
      { property: "og:title", content: "رسائل الطلبات · cupai" },
      { property: "og:description", content: "تحكم في الرسائل التلقائية التي تصل للعميل عند تحديث حالة الطلب." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OrderMessagesPage,
});

function OrderMessagesPage() {
  return (
    <HubShell
      eyebrow="رسائل الطلبات"
      title={<>الرسائل التلقائية</>}
      subtitle="الرسائل مفعّلة افتراضياً، ويمكنك تعديل أي رسالة أو إيقافها."
    >
      <StatusMessagesEditor />
    </HubShell>
  );
}
