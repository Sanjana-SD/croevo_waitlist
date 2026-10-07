import RouteLink from '../components/RouteLink.jsx';

export default function NotFound() {
  return <section className="not-found section-shell"><span className="eyebrow">PAGE NOT FOUND</span><h1>This page is off the map.</h1><RouteLink className="button button-primary" to="/">Back to Croevo</RouteLink></section>;
}
