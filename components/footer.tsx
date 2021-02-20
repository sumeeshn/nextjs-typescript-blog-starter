import Container from './container'

const Footer = () => {
  return (
    <footer className="border-t border-accent-2">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <h3 className="text-xl lg:text-2xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-full">
            2021 | Built with Nextjs, MDX.
          </h3>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
