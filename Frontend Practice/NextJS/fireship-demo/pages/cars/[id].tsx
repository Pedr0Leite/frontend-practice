import { useRouter } from "next/router";

import Head from "next/head";

interface CarInterface {
    car: {
        image?:string,
        color?:string,
        id?:string
    }
}

export default function Car({ car }: CarInterface) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
    <Head>
        <title>{car.color} {car.id}</title>
    </Head>
      <h1>Hello {id}</h1>
      <img src={car.image} width="300px"/>
    </>
  );
}

interface paramsType {
    params: any;
  }

export async function getServerSideProps({ params }: paramsType){
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();
  
    return {
      props: {
        car: data,
      },
    };
}


// export async function getStaticProps({ params }: paramsType) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: {
//       car: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//     const req = await fetch('http://localhost:3000/cars.json');
//     const data = await req.json();

//     const paths = data.map((car:any) => {
//         return {params: {id: car}}
//     });

//     return {
//         paths,
//         fallback: false
//     }
// }
