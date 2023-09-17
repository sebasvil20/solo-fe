'use client'

import { FC } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from '@nextui-org/react'

import { PostInfo } from '@/types'

interface PostProps {
  post: PostInfo
}

export const Post: FC<PostProps> = ({ post }) => {
  const { userName, userNick, postText, postDate, userPhoto } = post

  return (
    <Card className='w-[340px]'>
      <CardHeader className='justify-between'>
        <div className='flex gap-5'>
          <Avatar isBordered radius='full' size='md' src={userPhoto} />
          <div className='flex flex-col gap-1 items-start justify-center'>
            <h4 className='text-small font-semibold leading-none text-default-600'>
              {userName}
            </h4>
            <h5 className='text-small tracking-tight text-default-400'>
              @{userNick}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className='px-3 py-0 text-small text-default-400'>
        <p>{postText}</p>
      </CardBody>
      <CardFooter className='gap-3'>
        <div className='flex gap-1'>
          <p className='font-semibold text-default-400 text-small'>
            {postDate}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}
