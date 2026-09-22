import Link from "next/link";
export function Brand({ onNavigate }: { onNavigate?: () => void }) {
  return <Link href="/" onClick={onNavigate} className="brand" aria-label="Trafexa Nordic home" translate="no">
    <svg className="brand-symbol" viewBox="0 0 40 40" width="36" height="36" aria-hidden="true"><path d="M4 6h32v7H24v21h-8V13H4z" fill="currentColor"/><path d="M29 19h7v15h-7z" fill="currentColor" opacity=".45"/></svg>
    <span className="brand-copy"><strong>trafexa</strong><span>NORDIC</span></span>
  </Link>;
}
