# Ruta de los Padres de Fe · Fix Flujo

Cambios aplicados:

- El `index.html` ya no tiene marcador lateral. El marcador solo aparece en la modal de resultados y al final.
- Se corrigió el temporizador:
  - La cuenta regresiva es de 3 segundos.
  - La pregunta dura 20 segundos.
  - `index.html` y `player.html` usan el mismo `answerEndsAt` de Firebase.
- Al revelar:
  - Se muestra una modal tipo Kahoot con resultados.
  - No avanza todavía visualmente el tablero.
- Se agregó botón **Cerrar modal** en `admin.html`.
- Al presionar **Cerrar modal**:
  - La modal se cierra con animación.
  - Aparece el tablero.
  - Los colores se ven en la casilla anterior y luego saltan a la nueva.
- Al presionar **Continuar**:
  - Inicia la cuenta regresiva de 3 segundos.
  - Luego aparece la siguiente pregunta.

## Orden recomendado

1. Abrir lobby.
2. Iniciar.
3. Revelar y puntuar.
4. Cerrar modal.
5. Ver avance en tablero.
6. Continuar.
7. Repetir.

## Cambiar tiempos

Edita `js/shared.js`:

```js
export const COUNTDOWN_SECONDS = 3;
export const QUESTION_SECONDS = 20;
```


## Root Sync Fix

Corrección de raíz para sincronización:

- `player.html` no inicia un temporizador propio.
- `player.html` solo lee `game.state`, `questionStartsAt` y `answerEndsAt` desde Firebase.
- `admin.html` calcula `questionStartsAt` y `answerEndsAt` una sola vez al iniciar la cuenta regresiva.
- Al cambiar de `countdown` a `question`, `admin.html` NO recalcula `answerEndsAt`.
- `index.html` y `player.html` usan `.info/serverTimeOffset` de Firebase para leer la misma hora corregida.
- Durante `countdown`, el player muestra la pantalla de 3 segundos y no permite responder.
- Cuando `answerEndsAt` llega a 0, player bloquea inmediatamente las opciones.
- Se agregó selección de color antes de entrar al juego.
