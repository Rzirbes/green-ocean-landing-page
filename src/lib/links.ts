/**
 * Monta o link do wa.me com a mensagem preenchida.
 * Retorna `null` quando o número não é válido, para nunca gerar um link quebrado.
 */
export function buildWhatsAppUrl(
  number: string | null,
  message: string,
): string | null {
  let digits = number?.replace(/\D/g, "") ?? "";
  // DDD + número sem DDI (10 ou 11 dígitos): assume Brasil. Sem isso, o wa.me
  // leria o DDD como código de país (ex.: 51 viraria Peru).
  if (digits.length === 10 || digits.length === 11) digits = `55${digits}`;
  // DDI + DDD + número: no mínimo 10 dígitos, no máximo 15 (padrão E.164).
  if (digits.length < 10 || digits.length > 15) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function normalizeInstagramHandle(handle: string | null) {
  const clean = handle?.replace(/^@/, "").trim();
  if (!clean) return null;
  return { handle: `@${clean}`, url: `https://www.instagram.com/${clean}/` };
}
