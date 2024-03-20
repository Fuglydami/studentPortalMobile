import {useState} from 'react';
import {apiService} from '../services/apiServices';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
  message?: any;
}

export const useApiService = (navigation: NavigationProp<any>) => {
  // const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async <T,>(
    requestFn: () => Promise<AxiosResponse<T>>,
  ): Promise<ApiResponse<T>> => {
    setLoading(true);
    try {
      const response = await requestFn();

      return {
        data: response.data,
        message: response.data.message,
        loading: false,
        error: null,
      };
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        navigation.navigate('Login');
        console.log(
          error.response.status,
          'User is not authorized. Logging out...',
        );
      }
      return {
        data: null,
        loading: false,
        error: error.message,
      };
    } finally {
      setLoading(false);
    }
  };

  const get = async <T,>(
    url: string,
    accessToken?: string, // Access token parameter
    customHeaders?: Record<string, string>, // Custom headers parameter
  ): Promise<ApiResponse<T>> => {
    return fetchData<T>(() =>
      apiService.get<T>(url, {
        headers: {...customHeaders, Authorization: `Bearer ${accessToken}`},
      }),
    );
  };

  const post = async <T,>(
    url: string,
    data?: any,
    accessToken?: string, // Access token parameter
    customHeaders?: Record<string, string>, // Custom headers parameter
  ): Promise<ApiResponse<T>> => {
    return fetchData<T>(() =>
      apiService.post<T>(url, data, {
        headers: {...customHeaders, Authorization: `Bearer ${accessToken}`},
      }),
    );
  };

  const put = async <T,>(
    url: string,
    data?: any,
    accessToken?: string, // Access token parameter
    customHeaders?: Record<string, string>, // Custom headers parameter
  ): Promise<ApiResponse<T>> => {
    return fetchData<T>(() =>
      apiService.put<T>(url, data, {
        headers: {...customHeaders, Authorization: `Bearer ${accessToken}`},
      }),
    );
  };

  const remove = async <T,>(
    url: string,
    accessToken?: string, // Access token parameter
    customHeaders?: Record<string, string>, // Custom headers parameter
  ): Promise<ApiResponse<T>> => {
    return fetchData<T>(() =>
      apiService.delete<T>(url, {
        headers: {...customHeaders, Authorization: `Bearer ${accessToken}`},
      }),
    );
  };

  return {get, post, put, remove, loading};
};
