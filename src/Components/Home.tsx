import type { FC } from 'react';
import Card from './Card';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <div className='mx-auto '>
            
            <Card  />
           
           
        </div>
    );
}

export default Home;
