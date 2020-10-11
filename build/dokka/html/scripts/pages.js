var pages = [{'name': 'sealed class Either<out L, out R>', 'description':'net.lazy_bit.kotlin_train.mondas.Either', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/-either/index.html', 'searchKey':'Either'},
{'name': 'data class Left<L>(value: L) : Either<L, Nothing> ', 'description':'net.lazy_bit.kotlin_train.mondas.Either.Left', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/-either/-left/index.html', 'searchKey':'Left'},
{'name': 'fun <L> Left(value: L)', 'description':'net.lazy_bit.kotlin_train.mondas.Either.Left.Left', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/-either/-left/-left.html', 'searchKey':'Left'},
{'name': 'operator fun component1(): L', 'description':'net.lazy_bit.kotlin_train.mondas.Either.Left.component1', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/-either/-left/component1.html', 'searchKey':'component1'},
{'name': 'operator fun component1(): R', 'description':'net.lazy_bit.kotlin_train.mondas.Either.Right.component1', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/-either/-right/component1.html', 'searchKey':'component1'},
{'name': 'fun copy(value: L): Either.Left<L>', 'description':'net.lazy_bit.kotlin_train.mondas.Either.Left.copy', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/-either/-left/copy.html', 'searchKey':'copy'},
{'name': 'fun copy(value: R): Either.Right<R>', 'description':'net.lazy_bit.kotlin_train.mondas.Either.Right.copy', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/-either/-right/copy.html', 'searchKey':'copy'},
{'name': 'data class Right<R>(value: R) : Either<Nothing, R> ', 'description':'net.lazy_bit.kotlin_train.mondas.Either.Right', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/-either/-right/index.html', 'searchKey':'Right'},
{'name': 'fun <R> Right(value: R)', 'description':'net.lazy_bit.kotlin_train.mondas.Either.Right.Right', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/-either/-right/-right.html', 'searchKey':'Right'},
{'name': 'fun <L, R, V> Either<L, R>.flatMap(l: (L) -> V, r: (R) -> V): V', 'description':'net.lazy_bit.kotlin_train.mondas.flatMap', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/flat-map.html', 'searchKey':'flatMap'},
{'name': 'fun <L> left(value: L): Either.Left<L>', 'description':'net.lazy_bit.kotlin_train.mondas.left', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/left.html', 'searchKey':'left'},
{'name': 'fun <L, R, NL, NR> Either<L, R>.mapBoth(l: (L) -> NL, r: (R) -> NR): Either<NL, NR>', 'description':'net.lazy_bit.kotlin_train.mondas.mapBoth', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/map-both.html', 'searchKey':'mapBoth'},
{'name': 'fun <IN, FAILURE, OUT, NEW_FAILURE, NEW_OUT> TwoTrackOutput<IN, FAILURE, OUT>.mapBoth(success: PlainFunction<OUT, NEW_OUT>, failure: PlainFunction<FAILURE, NEW_FAILURE>): TwoTrackOutput<IN, NEW_FAILURE, NEW_OUT>', 'description':'net.lazy_bit.kotlin_train.tracks.mapBoth', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.tracks/map-both.html', 'searchKey':'mapBoth'},
{'name': 'infix fun <L, R, NL> Either<L, R>.mapLeft(block: (L) -> NL): Either<NL, R>', 'description':'net.lazy_bit.kotlin_train.mondas.mapLeft', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/map-left.html', 'searchKey':'mapLeft'},
{'name': 'infix fun <L, R, NR> Either<L, R>.mapRight(block: (R) -> NR): Either<L, NR>', 'description':'net.lazy_bit.kotlin_train.mondas.mapRight', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/map-right.html', 'searchKey':'mapRight'},
{'name': 'fun <R> right(value: R): Either.Right<R>', 'description':'net.lazy_bit.kotlin_train.mondas.right', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.mondas/right.html', 'searchKey':'right'},
{'name': 'fun <IN, FAILURE, OUT> SwitchFunction<IN, FAILURE, OUT>.bind(): TwoTrackFunction<IN, FAILURE, OUT, FAILURE>', 'description':'net.lazy_bit.kotlin_train.tracks.bind', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.tracks/bind.html', 'searchKey':'bind'},
{'name': 'infix fun <IN, FAILURE, OUT, NEW_OUT> TwoTrackOutput<IN, FAILURE, OUT>.composeBind(other: TwoTrackFunction<OUT, FAILURE, NEW_OUT, FAILURE>): TwoTrackOutput<IN, FAILURE, NEW_OUT>', 'description':'net.lazy_bit.kotlin_train.tracks.composeBind', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.tracks/compose-bind.html', 'searchKey':'composeBind'},
{'name': 'infix fun <IN, FAILURE, OUT1, OUT2> SwitchFunction<IN, FAILURE, OUT1>.composeSwitch(other: SwitchFunction<OUT1, FAILURE, OUT2>): SwitchFunction<IN, FAILURE, OUT2>', 'description':'net.lazy_bit.kotlin_train.tracks.composeSwitch', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.tracks/compose-switch.html', 'searchKey':'composeSwitch'},
{'name': 'fun <IN> failure(value: IN): Failure<IN>', 'description':'net.lazy_bit.kotlin_train.tracks.failure', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.tracks/failure.html', 'searchKey':'failure'},
{'name': 'operator fun <T> (Unit) -> T.invoke(): T', 'description':'net.lazy_bit.kotlin_train.tracks.invoke', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.tracks/invoke.html', 'searchKey':'invoke'},
{'name': 'fun main()', 'description':'net.lazy_bit.kotlin_train.tracks.main', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.tracks/main.html', 'searchKey':'main'},
{'name': 'fun <IN> success(value: IN): Success<IN>', 'description':'net.lazy_bit.kotlin_train.tracks.success', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.tracks/success.html', 'searchKey':'success'},
{'name': 'fun <IN, FAILURE, OUT> PlainFunction<IN, OUT>.switch(): SwitchFunction<IN, FAILURE, OUT>', 'description':'net.lazy_bit.kotlin_train.tracks.switch', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.tracks/switch.html', 'searchKey':'switch'},
{'name': 'fun <IN> DeadEndFunction<IN>.tee(): PlainFunction<IN, IN>', 'description':'net.lazy_bit.kotlin_train.tracks.tee', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.tracks/tee.html', 'searchKey':'tee'},
{'name': 'fun <IN, OUT> PlainFunction<IN, OUT>.tryCatch(): SwitchFunction<IN, Throwable, OUT>', 'description':'net.lazy_bit.kotlin_train.tracks.tryCatch', 'location':'kotlin-trains/net.lazy_bit.kotlin_train.tracks/try-catch.html', 'searchKey':'tryCatch'}]