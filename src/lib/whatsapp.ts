export function getWhatsAppNumber() {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511400000000";
}

export function buildWhatsAppUrl(message: string) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${getWhatsAppNumber()}?${params.toString()}`;
}

export function getDefaultWhatsAppMessage() {
  return (
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    "Olá! Vim pelo site S.O.S e gostaria de um orçamento."
  );
}

export function buildProductWhatsAppMessage(productName: string) {
  return `Olá! Gostaria de informações sobre o produto ${productName}.`;
}
