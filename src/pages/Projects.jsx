import React from "react";
import { Link } from "react-router-dom";

import memorygamePic from '../projectimages/memorygame.png'
import todolistPic from '../projectimages/todolist.png'
import calculatorPic from '../projectimages/calculator.png'
import menuPic from '../projectimages/menu.png'
import pokemonPic from '../projectimages/pokemon.png'
import shopPic from '../projectimages/shop.png'
import shopProjectver2Pic from '../projectimages/shopprojectver2.png'

const calculatorProject = 'https://calculator-project-ezt.pages.dev/'
const memorygameProject = 'https://memorygame-project.pages.dev/'
const menuProject = 'https://menu-project-eys.pages.dev/'
const todolistProject = 'https://todolist-project.pages.dev/'
const pokemonProject = 'https://pokemon-project-2tp.pages.dev/'
const shopProject = 'https://naffets3392.github.io/shopproject/'
const shopProjectver2 = 'https://naffets3392.github.io/shopprojectver2/'


const PROJECTS = [
    {
        image: memorygamePic,
        link: memorygameProject
    },
    {
        image: todolistPic,
        link: todolistProject
    },
    {
        image: calculatorPic,
        link: calculatorProject
    },
    {
        image: menuPic,
        link: menuProject
    },
    {
        image: pokemonPic,
        link: pokemonProject
    },
    {
        image: shopPic,
        link: shopProject
    },
    {
        image: shopProjectver2Pic,
        link: shopProjectver2
    }
]

export default function Projects() {
    // const [projects,setProjects] 
    return (
        <div className="projects__container">
            <h1>Projects</h1>
            <div className="PROJECTS__container">
                {PROJECTS.map(project => {
                    return <div className="project__container">
                        <img src={project.image} alt="" />
                        <a href={project.link} target="_blank">See project</a>
                    </div>
                })}
            </div>
            <Link className="home-link" to='/'>Home</Link>
        </div>
    )
}