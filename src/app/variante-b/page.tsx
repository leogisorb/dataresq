import { redirect } from 'next/navigation';

/** Legacy preview route — Design Variante B is now the homepage hero. */
export default function VarianteBPage(): never {
  redirect('/');
}
