'use client';
import { Button, ButtonType } from 'proyecto-viviana-ui';

export const runtime = 'edge';

export default function Home() {
  return (
    <>
      <div className={'flex flex-1 flex-col p-4 md:p-9'}>
        <h1
          className={
            'text-4xl font-semibold text-primary-100 drop-shadow-title-primary'
          }>
          ¿Qué es Axum?
        </h1>
        <div className='flex flex-wrap justify-center gap-5'>
          <Button
            type={ButtonType.Primary}
            onClick={() => {
              console.log('test1');
            }}>
            ME INTERESA
          </Button>
          <Button
            type={ButtonType.Secondary}
            onClick={() => {
              console.log('test1');
            }}>
            <span className='w-auto'>SALÍ DE ACÁ</span>
          </Button>
          <Button
            type={ButtonType.Danger}
            onClick={() => {
              console.log('test1');
            }}>
            <span className='w-auto'>ELIMINAR</span>
          </Button>
          <Button
            type={ButtonType.Success}
            onClick={() => {
              console.log('test1');
            }}>
            <span className='w-auto'>GUARDAR</span>
          </Button>
          <Button
            type={ButtonType.Link}
            onClick={() => {
              console.log('test1');
            }}>
            <a href='/test' className='w-auto'>
              BOTÓN LINK
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
