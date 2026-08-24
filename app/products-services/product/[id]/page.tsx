'use client';

import { useParams } from 'next/navigation';
import ProductDetailsPage from './ProductDetailsPage';

export default function Page() {
  const params = useParams();
  const slug = typeof params.id === 'string' ? params.id : undefined;

  return <ProductDetailsPage slug={slug} />;
}
