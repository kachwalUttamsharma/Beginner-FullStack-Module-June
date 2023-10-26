import React, {useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { message } from 'antd'
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { useParams } from 'react-router-dom';
import { GetMovieById } from '../../ApiCalls/movies';
import { GetAllTheatresByMovie} from '../../ApiCalls/threatres'; 
import moment from 'moment';

const TheatresForMovie = () => {
   
    const [movie, setMovie] = useState([]);
    const [date, setDate] = React.useState (moment().format("YYYY-MM-DD"));
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    const getData = async () => {
        try {
            dispatch(ShowLoading());
            const response = await GetMovieById(params.id);
            if (response.success) {
                console.log(response.data)
                setMovie(response.data);
            } else {
                message.error(response.message);
            }
            dispatch(HideLoading());
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }

  const getTheatres = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllTheatresByMovie({ date, movie: params.id });
      if (response.success) {
        console.log(response.data);
        dispatch(HideLoading());
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  }

    useEffect(() => {
        getData()
    }, [])

    useEffect( () => {
        getTheatres()
    }, [date])
  return (
    <div> {
        movie && (
            <div>
                 <div className="flex justify-between items-center mb-2">
                            <div>
                                <h1 className="text-2xl uppercase">
                                    {movie.title} ({movie.language})
                                </h1>
                                <h1 className="text-md">Duration : {movie.duration} mins</h1>
                                <h1 className="text-md">
                                    Release Date : {moment(movie.releaseDate).format("MMM Do yyyy")}
                                </h1>
                                <h1 className="text-md">Genre : {movie.genre}</h1>
                            </div>
                            <div>
                            <h1 className="text-md">Select Date</h1>
                            <input
                                type="date"
                                min={moment().format("YYYY-MM-DD")}
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value);
                                    navigate(`/movie/${params.id}?date=${e.target.value}`);
                                }}
                            />
                        </div>
                        </div>

            </div>
        )
        }</div>
  )
}

export default TheatresForMovie