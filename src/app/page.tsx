import { BearBox } from '@/components/BearBox'
import { FoodBox } from '@/components/FoodBox';
import { CatBox } from '@/components/CatBox';
import { CatBox2 } from '@/components/CatBox2';
import { CatController } from '@/components/CatController'; 

export default function Home() {
  return (
    <main className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <BearBox />
        <FoodBox /> 
      </div>
      {/* <div>
        <CatBox />
        <CatBox2 />
        <CatController />
      </div> */}
    </main>
  )
}
