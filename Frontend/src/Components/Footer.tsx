import Link from 'next/link'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
   <footer>


<div className='mx-w-[1440px] mx-auto text-[#fff]'>
  <div className='bg-[#1F2024]'>
  Footer top section
</div>
<div className='bg-[#000] text-sm/[32px] text-center py-5'>
  © {currentYear} All Rights Reserved <Link href="/" className='hover:text-[#004bbd]'>MobileDokan</Link>
</div>

</div>
   </footer>
  )
}

export default Footer