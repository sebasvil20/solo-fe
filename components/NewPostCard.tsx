'use client'
import { PostInfo } from '@/types'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Textarea,
  Button,
} from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

type AddNewPostFunction = (newPost: PostInfo) => void

export const NewPostCard = ({
  addNewPost,
}: {
  addNewPost: AddNewPostFunction
}) => {
  const { data: session, status } = useSession()
  const [postText, setPostText] = useState('')

  const handlePostTextChange = (event: any) => {
    setPostText(event.target.value) // Actualiza el estado local con el contenido del Textarea
  }

  const handlePost = () => {
    const today = new Date()
    const formattedToday = formatDate(today)
    const newPost: PostInfo = {
      userNick: session?.user.nickname,
      userName: session?.user.name,
      postText: postText,
      postDate: formattedToday,
      userPhoto: session?.user.image ? session?.user.image : './avatar1.png',
    }

    // Llama a la función para agregar el nuevo post
    addNewPost(newPost)

    // Limpia el contenido del Textarea después de publicar
    setPostText('')
  }

  function formatDate(date: Date) {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ]

    const day = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    const formattedDate = `${months[monthIndex]} ${day}, ${year}`

    return formattedDate
  }
  return (
    <Card className='w-[640px] p-2'>
      <CardHeader className='justify-between'>
        <div className='flex gap-5'>
          <Avatar
            isBordered
            radius='full'
            size='md'
            src={session?.user.image ? session?.user.image : '/avatar1.png'}
          />
          <div className='flex flex-col gap-1 items-start justify-center'>
            <h4 className='text-small font-semibold leading-none text-default-600'>
              {session?.user.name}
            </h4>
            <h5 className='text-small tracking-tight text-default-400'>
              @{session?.user.nickname}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className='px-3 py-2 text-2xl text-default-500'>
        <Textarea
          placeholder='Spit your thougths...'
          minRows={3}
          value={postText}
          size='lg'
          onChange={handlePostTextChange}
        />
      </CardBody>
      <CardFooter className='gap-3'>
        <div className='flex gap-1'>
          <Button color='secondary' onClick={handlePost}>
            Postear
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
