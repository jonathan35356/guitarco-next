import React from "react";
import Layout from "../components/layout";
import styles from "../styles/grid.module.css";
import Guitarra from "../components/guitarra";

export default function Tienda({ guitarras }) {
  return (
    <Layout title={"Tienda de Guitarras"}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>

        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const respuesta = await fetch(
    "http://192.168.1.24:1337/api/guitarras?populate=imagen"
  );
  const { data: guitarras } = await respuesta.json();

  return { props: { guitarras } };
}
