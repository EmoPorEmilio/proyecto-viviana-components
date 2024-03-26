'use client';
import { sen } from '../../../../fonts';
import {
  Dialog,
  ProfileHead,
  Badge,
  Button,
  ButtonType,
  Switch,
  //Icon,
  IconType,
  //Alert,
  //AlertType,
  TimelineItem,
  CardCarousel,
  CalendarCard,
  Conversation,
} from 'proyecto-viviana-ui';
import { MdMenu } from 'react-icons/md';

export const runtime = 'edge';

export default function Home() {
  return (
    <>
      <div className={'flex flex-1 flex-col p-4 md:p-9'}>
        <h1
          className={
            'text-4xl font-semibold text-primary-100 drop-shadow-title-primary'
          }>
          Botón
        </h1>
        <br />
        <span className={`${sen.className} text-lg text-primary-300`}>
          El botón viene en 5 variantes.
        </span>
        <br />
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
