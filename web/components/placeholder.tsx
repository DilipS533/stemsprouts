export default function Placeholder({ children }: { children?: React.ReactNode }) {
  return (
    <div className="card-soft">
      {children ?? <div className="text-gray-400">Placeholder component</div>}
    </div>
  );
}
