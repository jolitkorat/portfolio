import useCountUp from "../hooks/useCountUp";

export default function StatItem({ target, sym, label, triggered }) {
  const count = useCountUp(target, triggered);

  return (
    <div className="stat-item">
      <div className="stat-number">
        <span>{count}</span>
        <span className="sym">{sym}</span>
      </div>
      <div
        className="stat-label"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}
