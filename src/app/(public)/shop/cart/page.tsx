"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { CartItem, useCartStore } from "@/store/useCartStore";

type CheckoutStep = "cart" | "payment" | "success";

type CheckoutFormState = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
};

type CheckoutErrors = Partial<Record<keyof CheckoutFormState, string>>;

function formatMoney(value: number) {
  return `$${value.toLocaleString("es-CO")}`;
}

function sanitizeDigits(value: string) {
  return value.replace(/\D/g, "");
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getCartTotal } =
    useCartStore();

  const [step, setStep] = useState<CheckoutStep>("cart");
  const [isPaying, setIsPaying] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const [form, setForm] = useState<CheckoutFormState>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });
  const [errors, setErrors] = useState<CheckoutErrors>({});

  const total = getCartTotal();

  const itemCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const handleGoToPayment = () => {
    setStep("payment");
    setErrors({});
    setOrderId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const validate = (state: CheckoutFormState): CheckoutErrors => {
    const nextErrors: CheckoutErrors = {};
    if (!state.fullName.trim()) nextErrors.fullName = "Ingresa tu nombre";
    if (!state.email.trim()) nextErrors.email = "Ingresa tu email";
    if (!state.address.trim()) nextErrors.address = "Ingresa tu dirección";
    if (!state.city.trim()) nextErrors.city = "Ingresa tu ciudad";
    if (!state.country.trim()) nextErrors.country = "Ingresa tu país";

    const cardDigits = sanitizeDigits(state.cardNumber);
    if (cardDigits.length < 12) nextErrors.cardNumber = "Tarjeta inválida";
    if (!state.cardExpiry.trim()) nextErrors.cardExpiry = "Ingresa MM/AA";
    if (sanitizeDigits(state.cardCvc).length < 3)
      nextErrors.cardCvc = "CVC inválido";

    return nextErrors;
  };

  const handlePay = async () => {
    if (items.length === 0) {
      setStep("cart");
      return;
    }

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsPaying(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      const id = `YAM-${Date.now().toString().slice(-6)}`;
      setOrderId(id);
      clearCart();
      setStep("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <h1 className="text-(--text-color)">Carrito</h1>
        <div className="text-sm font-bold text-(--text-color)">
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </div>
      </div>

      {items.length === 0 && step !== "success" ? (
        <Card className="mt-6 bg-(--card-background) p-8">
          <h3 className="text-(--primary-color)">Tu carrito está vacío</h3>
          <p className="text-(--primary-color) opacity-80">
            Explora la tienda y agrega productos para comenzar.
          </p>
          <div className="mt-6">
            <Link href="/shop">
              <Button variant="secondary" className="py-3 px-6 text-base">
                Ir a la tienda
              </Button>
            </Link>
          </div>
        </Card>
      ) : null}

      {step === "success" ? (
        <Card className="mt-6 bg-(--card-background) p-8">
          <h2 className="text-(--primary-color)">Pago confirmado</h2>
          <p className="text-(--primary-color) opacity-80">
            Esta es una pasarela de pago básica (simulada). Más adelante se
            integrará Stripe.
          </p>
          {orderId ? (
            <p className="mt-4 text-(--primary-color) font-bold">
              ID de orden: {orderId}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop">
              <Button variant="secondary" className="py-3 px-6 text-base">
                Seguir comprando
              </Button>
            </Link>
            <Button
              variant="outline"
              className="py-3 px-6 text-base"
              onClick={() => {
                setForm({
                  fullName: "",
                  email: "",
                  phone: "",
                  address: "",
                  city: "",
                  country: "",
                  cardNumber: "",
                  cardExpiry: "",
                  cardCvc: "",
                });
                setErrors({});
                setOrderId(null);
                setStep("cart");
              }}
            >
              Volver al carrito
            </Button>
          </div>
        </Card>
      ) : null}

      {items.length > 0 && step !== "success" ? (
        <div className="mt-6 flex flex-col gap-6">
          <div>
            <Card className="bg-(--card-background) p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-(--primary-color)">
                  {step === "payment" ? "Revisar carrito" : "Tus productos"}
                </h3>
                <div className="flex gap-2">
                  <Link href="/shop">
                    <Button variant="outline" className="py-2 px-4 text-base">
                      Continuar comprando
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="py-2 px-4 text-base"
                    onClick={() => clearCart()}
                  >
                    Vaciar
                  </Button>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {items.map((item: CartItem) => {
                  const subtotal = item.price * item.quantity;
                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 items-center rounded-xl bg-white/40 p-4"
                    >
                      <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-white/50">
                        <Image
                          src={item.image_url}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h4 className="text-(--primary-color) truncate">
                              {item.title}
                            </h4>
                            <p className="text-(--primary-color) opacity-80">
                              {formatMoney(item.price)} c/u
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-(--primary-color)">
                              {formatMoney(subtotal)}
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              className="py-1 px-3 text-base rounded-lg"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              aria-label="Disminuir cantidad"
                            >
                              -
                            </Button>
                            <div className="min-w-10 text-center font-bold text-(--primary-color)">
                              {item.quantity}
                            </div>
                            <Button
                              variant="outline"
                              className="py-1 px-3 text-base rounded-lg"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              aria-label="Aumentar cantidad"
                            >
                              +
                            </Button>
                          </div>

                          <Button
                            variant="outline"
                            className="py-2 px-4 text-base"
                            onClick={() => removeItem(item.id)}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          <div>
            <Card className="bg-(--card-background) p-6">
              <h3 className="text-(--primary-color)">Resumen</h3>

              <div className="mt-4 flex items-center justify-between text-(--primary-color)">
                <span className="opacity-80">Subtotal</span>
                <span className="font-bold">{formatMoney(total)}</span>
              </div>

              <div className="mt-2 flex items-center justify-between text-(--primary-color)">
                <span className="opacity-80">Envío</span>
                <span className="font-bold">{formatMoney(0)}</span>
              </div>

              <div className="mt-4 h-px bg-(--primary-color)/15" />

              <div className="mt-4 flex items-center justify-between text-(--primary-color)">
                <span className="font-bold">Total</span>
                <span className="font-bold text-2xl">{formatMoney(total)}</span>
              </div>

              {step === "cart" ? (
                <div className="mt-6">
                  <Button
                    variant="primary"
                    className="w-full py-3 px-6 text-base"
                    onClick={handleGoToPayment}
                  >
                    Ir a pagar
                  </Button>
                </div>
              ) : null}

              {step === "payment" ? (
                <div className="mt-6 space-y-4">
                  <h4 className="text-(--primary-color)">Datos de envío</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <Input
                      label="Nombre completo"
                      value={form.fullName}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, fullName: e.target.value }))
                      }
                      error={errors.fullName}
                      placeholder="Juan Pérez"
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, email: e.target.value }))
                      }
                      error={errors.email}
                      placeholder="juan@email.com"
                    />
                    <Input
                      label="Teléfono (opcional)"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, phone: e.target.value }))
                      }
                      placeholder="300 000 0000"
                    />
                    <Input
                      label="Dirección"
                      value={form.address}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, address: e.target.value }))
                      }
                      error={errors.address}
                      placeholder="Calle 123 #45-67"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Input
                        label="Ciudad"
                        value={form.city}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, city: e.target.value }))
                        }
                        error={errors.city}
                        placeholder="Armenia"
                      />
                      <Input
                        label="País"
                        value={form.country}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, country: e.target.value }))
                        }
                        error={errors.country}
                        placeholder="Colombia"
                      />
                    </div>
                  </div>

                  <h4 className="text-(--primary-color)">Pago
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <Input
                      label="Número de tarjeta"
                      inputMode="numeric"
                      value={form.cardNumber}
                      onChange={(e) =>
                        setForm((s) => ({
                          ...s,
                          cardNumber: e.target.value,
                        }))
                      }
                      error={errors.cardNumber}
                      placeholder="4242 4242 4242 4242"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Input
                        label="Vencimiento (MM/AA)"
                        value={form.cardExpiry}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, cardExpiry: e.target.value }))
                        }
                        error={errors.cardExpiry}
                        placeholder="12/28"
                      />
                      <Input
                        label="CVC"
                        inputMode="numeric"
                        value={form.cardCvc}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, cardCvc: e.target.value }))
                        }
                        error={errors.cardCvc}
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-3">
                    <Button
                      variant="primary"
                      className="w-full py-3 px-6 text-base"
                      onClick={handlePay}
                      disabled={isPaying}
                    >
                      {isPaying ? "Procesando..." : "Confirmar pago"}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full py-3 px-6 text-base text-(--secondary-color) border-(--primary-color) bg-white/40"
                      onClick={() => setStep("cart")}
                      disabled={isPaying}
                    >
                      Volver
                    </Button>
                  </div>
                </div>
              ) : null}
            </Card>
          </div>
        </div>
      ) : null}
    </div>
  );
}
