import { Alert } from "bootstrap";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaRepeat, FaShuffle } from "react-icons/fa6";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

const Player = ({ query }) => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 align-items-center">
            <div className="col-6 col-md-3 d-flex align-items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Song Thumbnail"
                className="song-thumbnail me-2"
              />
              <div className="song-info text-white">
                <div className="song-title">Song Title</div>
                <div className="song-artist text-muted">Artist Name</div>
              </div>
            </div>

            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex justify-content-between">
                <a href="#">
                  <FaShuffle className="iconsplayer" />
                </a>
                <a href="#">
                  <TbPlayerTrackPrevFilled />
                </a>
                <a href="#">
                  <FaPlay />
                </a>
                <a href="#">
                  <TbPlayerTrackNextFilled />
                </a>
                <a href="#">
                  <FaRepeat />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
