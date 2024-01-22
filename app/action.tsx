"use server"
AnimeCard

import AnimeCard, {AnimeProp} from "@/components/AnimeCard";
import { log } from "console";

export const fetchAnime = async (page:number) =>{
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
    const data = await response.json();
    console.log(data)
    return data.map((item: AnimeProp, index) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ));
}