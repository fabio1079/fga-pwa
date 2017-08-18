export type CurrentPathState = string;

export type WebDataStatus = 'NOT_ASKED' | 'LOADING' | 'ERROR' | 'SUCCESS';

export type WebData<DataType> = {
  status: WebDataStatus,
  data: DataType,
  error: string
};

export type ArticlesImageType = {
  id: number,
  filename: string,
  url: string,
  icon_url: string,
  minor_url: string,
  portrait_url: string,
  thumb_url: string
};

export type ArticleType = {
  id: number,
  body: string,
  abstract?: string
  title: string,
  created_at: string,
  image?: ArticlesImageType
};

export type State = {
  currentPath: CurrentPathState,
  articles: WebData<ArticleType[]>
};

const initialState: State = {
  currentPath: '/',

  articles: {
    status: 'NOT_ASKED',
    data: [],
    error: ''
  }
};

export default initialState;