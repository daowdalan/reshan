import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className="h-[10vh] text-base flex items-center justify-between">
      <div>©2024 Reshan. All Rights Reserved</div>
      <div className="flex gap-4 items-center">
        <Image src="/Images/Icons/facebook.png" width={20} height={20} className="opacity-60 cursor-pointer transition-opacity duration-300 ease-in hover:opacity-100" alt='Facebook'/>
        <Image src="/Images/Icons/instagram.png" width={20} height={20} className="opacity-60 cursor-pointer transition-opacity duration-300 ease-in hover:opacity-100" alt='Instagram'/>
        <Image src="/Images/Icons/linkedin.png" width={20} height={20} className="opacity-60 cursor-pointer transition-opacity duration-300 ease-in hover:opacity-100" alt='Linkedin'/>
      </div>
    </div>
  )
}
