import React from "react";
import Layout from "../components/layout";

export default function Tienda({ guitarras }) {
  console.log(guitarras);
  return <Layout>tienda</Layout>;
}

export async function getStaticProps() {
  const respuesta = await fetch(
    "http://192.168.1.24:1337/api/guitarras?populate=imagen"
  );
  const { data: guitarras } = await respuesta.json();

  return { props: { guitarras } };
}
