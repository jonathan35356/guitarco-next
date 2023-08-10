import Layout from "./layout";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";

export default function Guitarra({ guitarra }) {
  const { nombre, publishedAt, descripcion, precio, imagen, url } = guitarra;
  return (
    <div>
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.formats.medium.url}
          alt={`Imagen guitarra ${nombre}`}
          width={300}
          height={500}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>{precio}</p>
          <Link href={`/guitarras/${url}`} className={styles.enlace}>
            Ver Producto
          </Link>
        </div>
      </div>
    </div>
  );
}
