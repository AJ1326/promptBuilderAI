import Feed from '@components/Feed'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>PromptUp</h1>
      <br className='max-md:hidden'/>
      <span className='orange_gradient text-center'>
        AI powered prompts.
      </span>
      <p>
        An open source AI prompting tool, to create autonomous expert agents.
      </p>
      <Feed></Feed>
    </section>
  )
}
