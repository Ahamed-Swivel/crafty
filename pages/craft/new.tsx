import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'
import ICraft from '@/models/Craft'
import { addNewCraft } from '@/features/craft/craftSlice'
import ManageCraft from '@/components/templates/ManageCraft'
import notify from '@/helpers/toast'

const NewCraft = () => {
  const router = useRouter()

  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.craftSlice.loading)
  const error = useAppSelector(state => state.craftSlice.error)

  useEffect(() => {
    if (error) {
      notify(`Failed! - ${error}`, 'error')
    }
  }, [error, router])

  const addCraft = (craft: ICraft) => {
    dispatch(addNewCraft(craft))
      .then((response) => {
        if (response.payload) {
          notify("Update successful!")
          router.replace('/', undefined, { shallow: true })
        }
      })
  }

  return (
    <>
      <Head>
        <title>Add new craft</title>
      </Head>
      <main>
        {isLoading && <LoadingSpinner/>}
        <ManageCraft onSubmit={addCraft} />
      </main>
    </>
  )
}

export default NewCraft
