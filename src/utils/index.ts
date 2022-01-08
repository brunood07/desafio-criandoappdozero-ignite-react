import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDate(date: string, time = false) {
  return format(
    new Date(date),
    time ? "dd MMM yyyy' às 'HH:mm'" : 'dd MMM yyyy',
    {
      locale: ptBR,
    }
  );
}
