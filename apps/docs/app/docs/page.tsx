'use client';
import Dialog from 'proyecto-viviana-ui/Dialog';
import ProfileHead from 'proyecto-viviana-ui/ProfileHead';
import Badge from 'proyecto-viviana-ui/Badge';
import { sen } from 'proyecto-viviana-ui/fonts';
import { Button, ButtonType } from 'proyecto-viviana-ui/Button';
import Switch from 'proyecto-viviana-ui/Switch';
import { Icon } from 'proyecto-viviana-ui/Icon';
import { IconType } from 'proyecto-viviana-ui/types';
import { Alert, AlertType } from 'proyecto-viviana-ui/Alert';
import TimelineItem from 'proyecto-viviana-ui/TimelineItem';
import { MdMenu } from 'react-icons/md';
import CardCarousel from 'proyecto-viviana-ui/CardCarousel';
import CalendarCard from 'proyecto-viviana-ui/CalendarCard';
import Conversation from 'proyecto-viviana-ui/Conversation';

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
        <br />
        <span className={`${sen.className} text-lg text-primary-300`}>
          Este es un ejemplo de documentación.
        </span>
        <br />
        <div className=''>
          <ProfileHead />
        </div>
        <div className='w-[400px]'>
          <CardCarousel />
        </div>
        <br />

        <div className='w-[400px]'>
          <CalendarCard />
        </div>
        <div className='w-[400px]'>
          <Conversation />
        </div>
        <TimelineItem />
        <br />
        <Dialog />
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
        <br />
        <Switch />
        <div className='flex flex-wrap justify-center gap-5'>
          <Icon icon={MdMenu} type={IconType.FULL} size='30px' />
          <Icon icon={MdMenu} type={IconType.OUTLINE} size='30px' />
          <Icon icon={MdMenu} type={IconType.BORDERLESS} size='30px' />
        </div>
        <br />
        <div className=''>
          <Alert type={AlertType.Primary} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
          <br />
          <Alert type={AlertType.Secondary} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
          <br />
          <Alert type={AlertType.Danger} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
          <br />
          <Alert type={AlertType.Success} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
        </div>
        <br />
        <div className=''>
          <Badge />
        </div>
      </div>
    </>
  );
}
