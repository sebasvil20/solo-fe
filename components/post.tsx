'use client'

import { FC, useState, useEffect } from 'react'
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

  const isTooLarge = postText.length > 400

  const [readMore, setReadMore] = useState<Boolean>(false)
  const [textToRender, setTextToRender] = useState<String>(
    postText.slice(0, 400)
  )

  useEffect(() => {
    setTextToRender(() => (readMore ? postText : postText.slice(0, 400)))
  }, [readMore, postText])

  return (
    <Card className='w-[640px] p-2'>
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
      <CardBody className='px-3 py-2'>
        <p className='text-xl leading-normal text-default-500'>
          {textToRender}
        </p>
        {isTooLarge && (
          <p
            className='text-sm pt-1 text-default-400 cursor-pointer'
            onClick={() => {
              setReadMore(!readMore)
            }}
          >
            {isTooLarge && readMore ? 'Read less...' : 'Read more...'}
          </p>
        )}
      </CardBody>
      <CardFooter className='gap-3'>
        <div className='flex gap-1'>
          <p className='text-default-300 text-xs'>{postDate}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
