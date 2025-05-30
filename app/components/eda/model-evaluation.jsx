import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useLoaderData } from 'react-router';

export default function ModelEvaluation() {
  const { result_table: data } = useLoaderData();

  return (
    <div>
      <h2 className="font-bold text-xl mb-2">Model Evaluations</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Train</TableHead>
            <TableHead>Test</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!data ? (
            <TableRow>
              <TableCell colSpan={3}>Loading...</TableCell>
            </TableRow>
          ) : (
            Object.keys(data).map((score) => (
              <TableRow key={score}>
                <TableHead>{score}</TableHead>
                <TableCell>{data[score][0].toFixed(3)}</TableCell>
                <TableCell>{data[score][1].toFixed(3)}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
