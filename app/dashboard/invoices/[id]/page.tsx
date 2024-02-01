import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.id;

  const invoice = await fetchInvoiceById(id);

  return {
    title: 'Iphone 15 Pro Max',
    description: 'Mua iphone nhanh lên',
    openGraph: {
      title: 'Iphone 15 Pro Max',
      description: 'Mua iphone nhanh lên',
      url: 'https://nextjs.org',
      images: [
        {
          url: 'https://salt.tikicdn.com/cache/750x750/ts/product/5e/8e/5a/ffd57c334ad997d311d311be41ef6aa8.png.webp',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const invoice = await fetchInvoiceById(id);

  return <div>Invoice detail + {invoice?.id}</div>;
}

export default Page;
