import Image from "next/image";
import React from "react";
import { useModalStore } from "../stores/ModalStore";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
}

const Thumbnail: React.FC<Props> = ({ movie }) => {
  const openModal = useModalStore((state) => state.openModal);
  const playingMovie = useModalStore((state) => state.movieState);
  const setPlayingMovie = useModalStore((state) => state.setMovieState);
  return (
    <div
      onClick={() => {
        openModal();
        if (!!movie) {
          setPlayingMovie(movie);
        }
      }}
      className="relative h-28 min-w-[180px]
    cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105
    "
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
