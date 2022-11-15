/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { SaveFavoriteHookProp } from "src/shared/models/core-props.model";
import { FavoriteToSave } from "src/shared/models/starwars.model";
import { axiosPost } from "src/shared/rest/axios-rest";

const baseUrl: string = 'swdb/';

const useSaveFavorite = (props?: SaveFavoriteHookProp) => {
  const [responsePayload, setResponsePayload] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    console.log(props);
    if (props?.film && props.userId) {
      const userUrl = `${baseUrl}${props.userId}/favorites`;
      setIsLoading(true);
      axiosPost(userUrl, props.film).then(
        (res) => {
          setResponsePayload(res);
        }
      ).catch((err) => {
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [props]);

  return {
    payload: responsePayload,
    loading: isLoading
  };
};

export default useSaveFavorite;