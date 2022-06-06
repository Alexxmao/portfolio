import { Heading, Stack } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";

export default function Projects(){
    return(
        <Stack px="20vh">
            <Heading py="5vh">Projects:</Heading>
            <Stack direction="row">
                <ProjectCard imageUrl='images/todolist.png' imageAlt='todo list screenshot' title='Todo List' githubLink="https://github.com/alexxmao/todo-list-app" link="https://todo-list-app-kohl.vercel.app/"/>
                <ProjectCard imageUrl='images/portfolio.png' imageAlt='portfolio screenshot' title='Portfolio Website' githubLink="https://github.com/Alexxmao/portfolio" link="https://amao.dev"/>
            </Stack>
            <Stack direction="row">
                {/* <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/>
                <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/>
                <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/>
                <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/> */}
            </Stack>
        </Stack>
    )
}