import { Heading, Stack } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";

export default function Projects(){
    return(
        <Stack px="20vh">
            <Heading py="5vh">Projects:</Heading>
            <Stack direction="row">
                <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/>
                <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/>
                <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/>
                <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/>
            </Stack>
            <Stack direction="row">
                <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/>
                <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/>
                <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/>
                <ProjectCard imageUrl='images/todolist.jpg' imageAlt='todo list screenshot' title='Todo List'/>
            </Stack>
        </Stack>
    )
}