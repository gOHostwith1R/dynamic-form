import { Routes, Route } from 'react-router';
import { CreatePage, MainPage } from '../pages';

export const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/create" element={<CreatePage />} />
  </Routes>
);
