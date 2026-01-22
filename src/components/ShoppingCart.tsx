import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  title: string;
  price: number;
  countryName: string;
  quantity: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onClearCart: () => void;
}

const ShoppingCart = ({ items, onRemoveItem, onUpdateQuantity, onClearCart }: ShoppingCartProps) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <Icon name="ShoppingCart" className="mr-2" size={18} />
          Корзина
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-primary to-secondary">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={24} />
            Корзина покупок
          </SheetTitle>
          <SheetDescription>
            {totalItems > 0 ? `У вас ${totalItems} ${totalItems === 1 ? 'товар' : 'товара'} в корзине` : 'Ваша корзина пуста'}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="w-24 h-24 mb-6 bg-muted rounded-full flex items-center justify-center">
              <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Корзина пуста</h3>
            <p className="text-muted-foreground mb-6">Добавьте аккаунты для покупки</p>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[calc(100vh-280px)] mt-6">
              <div className="space-y-4 pr-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-border rounded-lg bg-card/50">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.countryName}</p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <Icon name="Minus" size={14} />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Icon name="Plus" size={14} />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                      <div className="text-right">
                        <div className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {(item.price * item.quantity).toLocaleString()}₽
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-xs text-muted-foreground">
                            {item.price}₽ × {item.quantity}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <SheetFooter className="mt-6 flex-col gap-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-card/50">
                <div>
                  <p className="text-sm text-muted-foreground">Итого:</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {totalPrice.toLocaleString()}₽
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClearCart}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Icon name="Trash2" className="mr-2" size={16} />
                  Очистить
                </Button>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                <Icon name="CreditCard" className="mr-2" size={20} />
                Оформить заказ
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
