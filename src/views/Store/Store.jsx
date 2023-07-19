import React, { useEffect } from "react";
import CardsContainer from "../../components/cardsContainer/CardsContainer";
import useStoreMount from "./useStoreMount";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function AdminPanel() {
    useStoreMount()  
    const products = useSelector(state => state.products)
    return(
    <div>
        <h1>HOLI SOY EL ADMIN PANEL</h1>
        <Link to="/cart">Carrito</Link>
        <CardsContainer products={products}/>
    </div>
    )
}

// Que se vea un listado de productos guardados en la api
// --> Un formulario para editar los datos de los productos
// --> Cargar las fotos a los productos
// --> Filtrar los artículos por activos/inactivos/Categoría/nombre
// --> Ordenar por categoría/precio/nombre
// Estilado de cards
// Filtro --> Nombre
// Filtro --> categoria
// Filtro --> rango de precio

// Ordenamiento --> Nombre
// Ordenamiento --> Precio
// Ordenamiento --> Categoría
// Navbar --> icono de shower // icono de carrito con estilo vacio y lleno
// FilterBar -> barra de filtros y ordenamiento
