"use client";

/**
 * Botão que abre o atendente de IA (chat) de qualquer lugar do site.
 * Usado nas seções server-rendered da página.
 */
export default function OrderButton({
  children,
  className = "btn btn-primary",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={() => window.dispatchEvent(new Event("kamei:open-chat"))}
    >
      {children}
    </button>
  );
}
